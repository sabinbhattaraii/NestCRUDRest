import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './env-validation';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  getValue<K extends keyof EnvironmentVariables>(
    key : K,
    throwOnMissing = true,
  ) : EnvironmentVariables[K]{
    if (throwOnMissing && !this.configService.get(key)){
      throw new Error(`Config Error - Missing env variable: ${key}`);
    }
    return this.configService.get(key);
  }
}

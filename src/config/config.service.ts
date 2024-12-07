import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './env-validation';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  getValue<K extends keyof EnvironmentVariables>();
}

import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  validateSync,
} from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  HOST: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(65535)
  PORT: number;

  @IsNotEmpty()
  @IsString()
  API_PREFIX: string;

  @IsOptional()
  @IsString()
  MODE: string;

  @IsString()
  API_TITLE: string;

  @IsString()
  API_DESCRIPTION: string;

  @IsString()
  API_VERSION: string;

  @IsString()
  @IsNotEmpty()
  DATABASE_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(65535)
  DATABASE_PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_USER: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD: string;

  @IsString()
  DATABASE_NAME: string;

  @IsString()
  @IsNotEmpty()
  STRATEGY_ACCESS: string;

  @IsString()
  @IsNotEmpty()
  ACCESS_SECRET_KEY_EXPIRE_TIME: string;

  @IsString()
  @IsNotEmpty()
  ACCESS_SECRET_KEY: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_USER: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  POSTGRES_DB: string;

  @IsNotEmpty()
  @IsString()
  PGADMIN_DEFAULT_EMAIL: string;

  @IsNotEmpty()
  @IsString()
  PGADMIN_DEFAULT_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
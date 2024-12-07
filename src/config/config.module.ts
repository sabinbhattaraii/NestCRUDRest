import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { validate } from "./env-validation";
import { ApiConfigService } from "./config.service";

@Global()
@Module({
    imports : [
        ConfigModule.forRoot({
            isGlobal : true, //Makes the configuration globally available
            validate,
        }),
    ] , 
    providers : [ApiConfigService],
    exports : [ApiConfigService],
})
export class AppConfigModule{}
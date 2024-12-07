import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({
    imports : [
        ConfigModule.forRoot({
            isGlobal : true, //Makes the configuration globally available
        }),
    ] , 
    providers : [],
    exports : [],
})
export class AppConfigModule{}
import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateToUserTable1735965640866 implements MigrationInterface {
    name = 'UpdateToUserTable1735965640866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "middleName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying(255) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'other'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "address" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "shippingAddress" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "contactNumber" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "country" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying(255) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('super-admin', 'admin', 'user')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "contactNumber"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "shippingAddress"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "middleName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(255) NOT NULL`);
    }

}

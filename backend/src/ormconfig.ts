import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  database: 'reviews.sqlite3',
  type: 'sqlite',
  migrationsRun: true,
  synchronize: true,
};

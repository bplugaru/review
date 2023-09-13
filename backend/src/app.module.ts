import { Module } from '@nestjs/common';
import { config } from './ormconfig';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config), ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

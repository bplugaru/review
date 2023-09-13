import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
export class CreateReviewDto {
  @IsNotEmpty()
  name: string;

  website: string;

  @IsString()
  review: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}

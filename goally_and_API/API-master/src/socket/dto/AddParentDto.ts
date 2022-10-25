import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class AddParentDto {
  @IsMongoId()
  parentId: Types.ObjectId;
}

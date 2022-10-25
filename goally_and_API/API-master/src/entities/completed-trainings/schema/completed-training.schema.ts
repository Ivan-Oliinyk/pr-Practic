import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BehaviorTraining } from 'src/entities/behavior-trainings/schema/behavior-training.schema';
import { CreateTrainingSegment } from 'src/entities/behavior-trainings/training-segments/dto/CreateTrainingSegment.dto';
import { TrainingSegmentSchema } from 'src/entities/behavior-trainings/training-segments/schema/training-segment.schema';
import { Client } from 'src/entities/clients/schema/client.schema';
import { User } from 'src/entities/users/schema';

export class Reason {
  reason: string;
  _id?: Types.ObjectId;
}

@Schema({ timestamps: true })
export class CompletedTraining extends Document {
  @Prop({
    type: Types.ObjectId,
    ref: BehaviorTraining.name,
    default: null,
  })
  behaviorTrainingId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({
    required: true,
    default: [],
    type: [{ reason: String }],
  })
  reasons: Reason[];

  @Prop({})
  videoURL: string;

  @Prop({
    type: [TrainingSegmentSchema],
  })
  segments: Partial<CreateTrainingSegment>[];

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  puzzlePieces: number;

  @Prop()
  pin: number;

  @Prop({ default: false })
  isPinRequired: boolean;

  @Prop({ default: false })
  puzzlePieceOnCorrectAnswer: boolean;

  @Prop({
    type: Types.ObjectId,
    ref: User.name,
    required: true,
  })
  createdBy: User;

  @Prop({
    type: Types.ObjectId,
    ref: Client.name,
  })
  clientId: Types.ObjectId;

  createdAt: Date;

  @Prop({
    type: Date,
  })
  startedAt: Date;

  @Prop()
  bstType: string;

  @Prop()
  totalTimeToCompleteInMin: number;
}

const CompletedTrainingSchema = SchemaFactory.createForClass(CompletedTraining);

export { CompletedTrainingSchema };

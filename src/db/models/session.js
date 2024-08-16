import { required } from 'joi';
import { model, Schema } from 'mongoose';

const sessionsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { typ: Date, required: true },
  },
  { timestamps: true, versionKey: false },
);
export const SessionsCollection = model('sessions', sessionsSchema);

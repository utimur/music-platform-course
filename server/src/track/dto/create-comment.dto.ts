import {ObjectId} from "mongoose";

export class CreateCommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}

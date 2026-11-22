import { PartialType, OmitType } from '@nestjs/mapped-types';

export class TodoDTO {
    id : number;
    title: string;
    completed: boolean;
}

export class UpdateTodoDto extends PartialType(OmitType(TodoDTO, ['id'] as const)) {}
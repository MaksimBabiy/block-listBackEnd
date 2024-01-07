import { ApiProperty } from '@nestjs/swagger';

export class BlockItemDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    blockListId: number

    type: 
   
}
export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockItemDto[];
}

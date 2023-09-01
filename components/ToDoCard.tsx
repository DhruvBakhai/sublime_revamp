'use client'

import { XCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd'

type Props = {
    todo: Todo
    index: number
    id: TypedColumn
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

function ToDoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) {
    return (
        <div
            className='bg-white rounded-md space-y-2 drop-shadow-md'
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}>
            <div className="flex items-center p-5 justify-between">
                <p>{todo.title}</p>
                <button className='text-red-500 hover:text-red-600'>
                    <XCircleIcon className='h-8 w-8 ml-5' />
                </button>
            </div>

            {/* Add the image after */}
        </div>
    )
}

export default ToDoCard

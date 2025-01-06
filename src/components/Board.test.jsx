import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';

const mockBoardsData = [
    { id: 1, title: 'Board 1', owner: 'Owner 1' },
    { id: 2, title: 'Board 2', owner: 'Owner 2' },
];

const mockOnBoardSelect = jest.fn();

describe('Board Component', () => {
    test('renders Board component with boards list', () => {
        render(<Board boardsData={mockBoardsData} onBoardSelect={mockOnBoardSelect} selectedBoard={{}} />);

        expect(screen.getByText('Boards')).toBeInTheDocument();
        expect(screen.getByText('Board 1')).toBeInTheDocument();
        expect(screen.getByText('Board 2')).toBeInTheDocument();
    });

    test('calls onBoardSelect when a board is clicked', () => {
        render(<Board boardsData={mockBoardsData} onBoardSelect={mockOnBoardSelect} selectedBoard={{}} />);

        fireEvent.click(screen.getByText('Board 1'));
        expect(mockOnBoardSelect).toHaveBeenCalledWith(1);

        fireEvent.click(screen.getByText('Board 2'));
        expect(mockOnBoardSelect).toHaveBeenCalledWith(2);
    });

    test('displays selected board title when a board is selected', () => {
        const selectedBoard = { id: 1, title: 'Board 1', owner: 'Owner 1' };
        render(<Board boardsData={mockBoardsData} onBoardSelect={mockOnBoardSelect} selectedBoard={selectedBoard} />);

        expect(screen.getByText('Selected Board')).toBeInTheDocument();
        expect(screen.getByText('Board 1')).toBeInTheDocument();
    });

    test('displays message when no board is selected', () => {
        render(<Board boardsData={mockBoardsData} onBoardSelect={mockOnBoardSelect} selectedBoard={{}} />);

        expect(screen.getByText('Select a Board from the Board List')).toBeInTheDocument();
    });
});
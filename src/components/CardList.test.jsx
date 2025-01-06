import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList Renders', () => {
    const cards = [
        {
            id: 1,
            message: "You're doing amazing!",
            likes_count: 5,
        },
        {
            id: 2,
            message: "You're doing great!",
            likes_count: 3,
        },
    ];

    test('renders CardList component', () => {
        //Act
        render(
            <CardList
              cards={cards}
              onLikeCallback={() => {}}
              onDeleteCallback={() => {}}
            />
    );

    // Assert
    expect(screen.getByText('You\'re doing amazing!')).toBeInTheDocument();
    expect(screen.getByText('You\'re doing great!')).toBeInTheDocument();
  });
});
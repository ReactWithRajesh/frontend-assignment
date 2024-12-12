import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../src/Pagination';

describe('Pagination Component', () => {
  test('renders pagination buttons correctly', () => {
    const mockSetActivePage = jest.fn();
    const totalPages = 5;
    const activePage = 1;
    const pageSize = 10;

    render(
      <Pagination
        activePage={activePage}
        setActivePage={mockSetActivePage}
        pageSize={pageSize}
      />
    );


    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();


    for (let i = 1; i <= totalPages; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  test('clicking on page number button updates the activePage', () => {
    const mockSetActivePage = jest.fn();
    const activePage = 1;
    const pageSize = 10;

    render(
      <Pagination
        activePage={activePage}
        setActivePage={mockSetActivePage}
        pageSize={pageSize}
      />
    );

   
    fireEvent.click(screen.getByText('2'));

    expect(mockSetActivePage).toHaveBeenCalledWith(2);
  });

  test('clicking on "Previous" button decreases the activePage', () => {
    const mockSetActivePage = jest.fn();
    const activePage = 2;
    const pageSize = 10;

    render(
      <Pagination
        activePage={activePage}
        setActivePage={mockSetActivePage}
        pageSize={pageSize}
      />
    );

    fireEvent.click(screen.getByText('Previous'));

    expect(mockSetActivePage).toHaveBeenCalledWith(1);
  });

  test('clicking on "Next" button increases the activePage', () => {
    const mockSetActivePage = jest.fn();
    const activePage = 1;
    const pageSize = 10;

    render(
      <Pagination
        activePage={activePage}
        setActivePage={mockSetActivePage}
        pageSize={pageSize}
      />
    );

    fireEvent.click(screen.getByText('Next'));

    expect(mockSetActivePage).toHaveBeenCalledWith(2);
  });
});

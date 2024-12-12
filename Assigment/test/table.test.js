import { render, screen, waitFor } from '@testing-library/react';
import ProjectsTable from '../src/components/ProjectsTable/ProjectsTable';

jest.mock('node-fetch', () => jest.fn());

const mockData = [
  { "s.no": 1, "percentage.funded": 50, "amt.pledged": 1000 },
  { "s.no": 2, "percentage.funded": 75, "amt.pledged": 2000 },
  { "s.no": 3, "percentage.funded": 80, "amt.pledged": 3000 },
  { "s.no": 4, "percentage.funded": 60, "amt.pledged": 4000 },
  { "s.no": 5, "percentage.funded": 90, "amt.pledged": 5000 },
  { "s.no": 6, "percentage.funded": 85, "amt.pledged": 6000 },
  { "s.no": 7, "percentage.funded": 70, "amt.pledged": 7000 },
  { "s.no": 8, "percentage.funded": 95, "amt.pledged": 8000 },
];

describe('ProjectsTable Component', () => {
  test('renders table with data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<ProjectsTable activePage={1} pageSize={5} />);

    
    expect(screen.getByText('S.No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage funded')).toBeInTheDocument();
    expect(screen.getByText('Amount pledged')).toBeInTheDocument();

   
    await waitFor(() => screen.getByText('1')); 
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  test('paginates data correctly based on activePage and pageSize', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<ProjectsTable activePage={2} pageSize={5} />);

    await waitFor(() => screen.getByText('6')); 
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('85')).toBeInTheDocument();
    expect(screen.getByText('6000')).toBeInTheDocument();
  });
});

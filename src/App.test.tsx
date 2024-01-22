import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render App', () => {
    render(<App />)

    const healthcheckTag = screen.getByTestId('healthcheck')

    expect(healthcheckTag).toBeInTheDocument()
  })
})

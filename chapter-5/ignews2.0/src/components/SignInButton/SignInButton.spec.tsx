import { render, screen } from '@testing-library/react'
import { SignInButton } from '.'

import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const mockedUseSection = mocked(useSession)

    mockedUseSection.mockReturnValueOnce([null, false])

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign In with GitHub')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const mockedUseSession = mocked(useSession)

    mockedUseSession.mockReturnValueOnce([{
      user: {
        name: 'John Doe',
        email: 'johndoe@email.com',        
      },
      expires: 'fake-expires'
      }, 
      false
  ])

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
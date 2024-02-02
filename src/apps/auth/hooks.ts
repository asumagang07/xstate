import { useContext } from 'react'
import { Context } from './Provider'

export const useAuthMachine = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useAuthMachine must be used within an AuthMachineProvider')
  }
  return context
}

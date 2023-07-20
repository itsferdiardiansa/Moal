import { VariantTypes, ButtonContainer } from './ButtonStyle'

interface ButtonProps {
  variant: VariantTypes
  label: string
}

const Button = ({ variant = 'primary', label }) => {
  return (
    <ButtonContainer $variant={variant}>
      <button>{label}</button>
    </ButtonContainer>
  )
}

export default Button

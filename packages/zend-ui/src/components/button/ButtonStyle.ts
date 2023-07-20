import styled, { css } from 'styled-components'
import { COLORS, SPACING } from '@constant'

export const Variants = ['primary', 'success', 'warning', 'danger'] as const
export type VariantTypes = (typeof Variants)[number]

interface ButtonContainerProps {
  $variant: VariantTypes
  $size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
}

const getVariants = (variant: VariantTypes) =>
  ({
    primary: css`
      background-color: ${COLORS['brandBluePrimary']};
      border: 1px solid ${COLORS['brandBluePrimary']};
    `,
    success: css`
      background-color: ${COLORS['supportSuccessDefault']};
      border: 1px solid ${COLORS['supportSuccessDefault']};
    `,
    warning: css`
      background-color: ${COLORS['brandOrangePrimary']};
      border: 1px solid ${COLORS['brandOrangePrimary']};
    `,
    danger: css`
      background-color: ${COLORS['supportDangerDefault']};
      border: 1px solid ${COLORS['supportDangerDefault']};
    `,
  })[variant]

export const ButtonContainer = styled.div<ButtonContainerProps>`
  height: 100%;
  position: relative !important;

  button {
    padding: ${SPACING['small']};
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    font-size: 1rem;
    cursor: pointer;
    border-width: 1px;
    border-color: transparent;
    color: ${COLORS['contentLightOnInverse']};
    font-weight: 600;

    ${({ $variant }) => getVariants($variant)}
  }
`

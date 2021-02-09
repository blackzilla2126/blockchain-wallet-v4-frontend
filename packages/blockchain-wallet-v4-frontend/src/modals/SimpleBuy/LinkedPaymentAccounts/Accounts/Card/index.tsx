import {
  DisplayContainer,
  DisplayIcon,
  MultiRowContainer
} from 'components/SimpleBuy'
import { FormattedMessage } from 'react-intl'
import { SBPaymentMethodType } from 'core/types'
import { Title, Value } from 'components/Flyout'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledValue = styled(Value)`
  text-transform: capitalize;
`

const StyledTitle = styled(Title)`
  color: ${p => p.theme.grey600};
  font-size: 14px;
  font-weight: 500;
`

type Props = {
  icon: ReactElement
  onClick: (string) => void
  text: string
  value: SBPaymentMethodType
}

const Card: React.FC<Props> = ({ value, onClick, icon, text }) => (
  <DisplayContainer
    data-e2e={`sb${value.type.toLowerCase()}Cards`}
    role='button'
    onClick={onClick}
  >
    <DisplayIcon>{icon}</DisplayIcon>
    <MultiRowContainer>
      <StyledValue asTitle>{text.toLowerCase()}</StyledValue>
      <StyledTitle asValue>
        {value.card ? (
          <FormattedMessage
            id='modals.simplebuy.card_ending_in'
            defaultMessage='Card Ending in {lastFour}'
            values={{ lastFour: value.card.number }}
          />
        ) : (
          <FormattedMessage
            id='modals.simplebuy.paymentcard'
            defaultMessage='Credit or Debit Card'
          />
        )}
      </StyledTitle>
    </MultiRowContainer>
  </DisplayContainer>
)

export default Card

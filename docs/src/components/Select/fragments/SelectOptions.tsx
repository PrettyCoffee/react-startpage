import React, { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Listbox } from "@headlessui/react"

import { SelectOption } from "./SelectOption"
import { SelectProps } from "../Select"

const StyledOptions = styled(Listbox.Options)<PropsWithChildren>`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: ${space.small};
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    outline: none;
    z-index: 1;
    box-shadow: 0 0 ${space.small} ${color.bg.shade};
    top: calc(100% + ${space.small});
  `}
`

type OptionsProps = Pick<SelectProps, "options">

export const SelectOptions = ({ options }: OptionsProps) => (
  <StyledOptions>
    {options.map(({ label, value }) => (
      <SelectOption key={value} value={value} label={label} />
    ))}
  </StyledOptions>
)

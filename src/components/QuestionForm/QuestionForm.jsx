import React, { useState } from 'react'
import styled from 'styled-components'
import { Questions } from './Questions'

export const QuestionForm = () => {
	const [isActive, setIsActive] = useState(false)

	const formActiveHandler = () => {
		setIsActive(true)
	}
	return (
		<Wrapper onClick={formActiveHandler}>
			<br></br>
			<Container>
				<div>
					<StyledForm>
						{isActive && <Side></Side>}
						<div>
							<FormTitle placeholder='Новая форма' />
							<span></span>
							<FormDescription placeholder='Описание' />
						</div>
					</StyledForm>
				</div>
			</Container>
      <Questions/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100%;
	padding-bottom: 30px;
`
const Container = styled.div`
	margin: auto;
	width: 50%;
	box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
		0 1px 3px 0 rgb(0 0 0 / 12%);
`
const Side = styled.span`
	width: 5px;
	height: 125px;
	background-color: blue;
`
const StyledForm = styled.div`
	display: flex;
	background-color: white;
	border-top: 8px solid rgb(103, 58, 183);
	border-radius: 8px;
	text-transform: capitalize;
	& div {
		padding: 30px 25px;
	}
`
const FormTitle = styled.input`
	font-family: 'Google Sans', Roboto, Arial, Helvetica, sans-serif, sans-serif;
	font-size: 32px;
	font-weight: 400;
	line-height: 40px;
	line-height: 135%;
	width: 100%;
	border: none;
	border-bottom: 1px solid #f4f4f9;
	color: black;
	height: 35px;
	outline: none;
	&:focus {
		border-bottom: 2px solid rgb(103, 58, 183);
	}
	&::placeholder {
		color: #202124;
	}
`

const FormDescription = styled.input`
	margin-top: 10px;
	font-family: 'Google Sans', Roboto, Arial, sans-serif;
	font-size: 13px;
	font-weight: 400;
	line-height: 40px;
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 1px solid #f4f4f9;
	color: black;
	height: 20px;
	&:focus {
		border-bottom: 2px solid rgb(103, 58, 183);
	}
	&::placeholder {
		color: #202124;
	}
`

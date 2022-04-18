import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { uiSliceActions } from '../../store/slices/uiSlice'
import { formActions } from '../../store/slices/formSlice'

const options = [
	{
		id: 'el1',
		image: 'https://www.svgrepo.com/show/376702/text-line.svg',
		text: 'Текст (строка)',
		type: 'text',
	},
	{
		id: 'el2',
		image: 'https://www.svgrepo.com/show/371212/dot-circle.svg',
		text: 'Один из списка',
		type: 'radio',
	},
	{
		id: 'el3',
		image: 'https://www.svgrepo.com/show/343021/checkbox-checked.svg',
		text: 'Несколько из списка',
		type: 'checkbox',
	},
	{
		id: 'el4',
		image: 'https://img.icons8.com/ios/344/badge.png',
		text: 'Ф.И.О',
		type: 'text',
	},
	{
		id: 'el5',
		image: 'https://img.icons8.com/dotty/344/number-pad.png',
		text: 'Номер телефона',
		type: 'tel',
	},
	{
		id: 'el6',
		image: 'https://www.svgrepo.com/show/18341/email.svg',
		text: 'Email address',
		type: 'email',
	},
	{
		id: 'el7',
		image: 'https://www.svgrepo.com/show/153315/date.svg',
		text: 'Дата',
		type: 'date',
	},
]

function Backdrop({ onConfirm }) {
	return <StyledBackdrop onClick={onConfirm}></StyledBackdrop>
}

const ModalOverly = ({ id, getValue }) => {
	const dispatch = useDispatch()

	const addQuestionType = (e, id, type) => {
		console.log(e.target.parentElement.parentElement)
		if (e.target.parentNode.id === id) {
			getValue(e.currentTarget.textContent, type)
		}
		dispatch(formActions.changeType({ id, type }))
	}

	return (
		<StyledContainer>
			{options.map((el) => (
				<StyledDiv
					key={el.id}
					onClick={(e) => addQuestionType(e, id, el.type)}
				>
					<StyledIcon>
						<img src={el.image} />
					</StyledIcon>
					<span>{el.text}</span>
				</StyledDiv>
			))}
		</StyledContainer>
	)
}
export const Modal = ({ id, getValue }) => {
	const dispatch = useDispatch()

	const cancelHandler = () => {
		dispatch(uiSliceActions.cancel())
	}
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={cancelHandler} />,
				document.getElementById('backdrop'),
			)}
			{ReactDOM.createPortal(
				<ModalOverly getValue={getValue} id={id} />,
				document.getElementById('modal-root'),
			)}
		</>
	)
}

const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
`
const StyledContainer = styled.div`
	width: 330px;
	height: 455px;
	border-radius: 4px;
	border: none;
	z-index: 10;
	position: fixed;
	background-color: white;
	top: 20px;
	left: 790px;
	box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
		0 2px 6px 2px rgb(60 64 67 / 15%);
	& :hover {
		background-color: lightgray;
	}
`
const StyledDiv = styled.div`
	width: 325px;
	height: 65px;
	display: flex;
	align-items: center;
	margin: auto;
	border-bottom: 1px solid gray;
	cursor: pointer;
`
const StyledIcon = styled.div`
	margin: 10px 8px 0 20px;
	& img {
		width: 30px;
	}
`

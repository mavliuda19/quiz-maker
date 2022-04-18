import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { uiSliceActions } from '../../store/slices/uiSlice'
import {Modal} from '../ui/Modal'
import {QuestionBody} from './QuestionBody'
import {QuestionCard} from './QuestionCard'
import { QuestionFooter } from './QuestionFooter'

export const Questions = () => {
	const dispatch = useDispatch()

	const modalIsVisible = useSelector((state) => state.ui.modalIsVisible)
	const { open, forms } = useSelector((state) => state.form)
console.log(forms);
	const [value, setValue] = useState()
	const [type, setType] = useState()

	const changeQuestionText = (text, id) => {
		dispatch(formActions.changeQuestionText({ text, id }))
	}
	const getType = (value, types) => {
		setValue(value)
		setType(types)
	}
	const onClickHandler = () => {
		dispatch(uiSliceActions.toogle())
	}

	// const openForm = (open, id) => {
	// 	dispatch(formActions.openForm({ id }))
	// }
	const closeForm = () => {
		const newd = [...forms]
		for (let i = 0; i < newd.length; i++) {
			newd[i].open = false
		}
		console.log(newd)
		forms.push({ newd })
	}
	return (
		<>
			<Wrapper>
				<div>
					{forms.map((questionForm) => (
						<MainContainer
							key={questionForm.id}
							
						>
							{questionForm.open ? (
								<>
									<QuestionSection>
										<TitleQuestion>
											<input
												onChange={(e) =>
													changeQuestionText(
														e.target.value,
														questionForm.id,
													)
												}
												value={
													questionForm.questionText
												}
												placeholder='Вопрос'
											/>
										</TitleQuestion>
										<WrapperSelect onClick={onClickHandler}>
											{modalIsVisible && (
												<Modal
													getValue={getType}
													id={questionForm.id}
												/>
											)}
											<SelectTitle>{value}</SelectTitle>
											<SelectOne> ▾</SelectOne>
										</WrapperSelect>
									</QuestionSection>
									<QuestionBody
										type={type}
										options={questionForm.options}
										formId={questionForm.id}
									/>
									<QuestionFooter
										id={questionForm.id}
										forms={forms}
									/>
								</>
							) : (
								<>
									<QuestionSection>
										<TitleQuestion>
											<input
												placeholder={
													questionForm.questionText
												}
											/>
										</TitleQuestion>
									</QuestionSection>
								</>
							)}
						</MainContainer>
					))}
				</div>
				<QuestionCard type={type} />
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	display: flex;
	margin: 2rem auto;
	width: 770px;
`
const MainContainer = styled.div`
	background-color: #fff;
	border-radius: 8px;
	width: 770px;
	padding: 25px 25px;
	margin-bottom: 20px;
	flex-direction: column;
	box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
		0 1px 3px 0 rgb(0 0 0 / 12%);
`
const QuestionSection = styled.div`
	display: flex;
	width: 715px;
	justify-content: space-between;
`
const TitleQuestion = styled.div`
	background-color: #f8f9fa;
	display: flex;
	border-bottom: 1px solid gray;
	color: black;
	& input {
		background-color: #f8f9fa;
		font-family: 'Google Sans', Roboto, Arial, sans-serif;
		font-size: 15px;
		font-weight: 400;
		flex: 1;
		line-height: 40px;
		border: none;
		outline: none;
		border-bottom: 1 px solid #dadce0;
		color: black;
		height: 60px;
		width: 320px;
		margin-right: 10px;
		padding: 20px;
		&:focus {
			border-bottom: 1.5px solid rgb(103, 58, 183);
		}
	}
`
const WrapperSelect = styled.div`
	width: 315px;
	height: 53px;
	border: 1px solid #dadce0;
	border-radius: 4px;
	padding: 10px 15px;
	margin-right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`
const SelectOne = styled.span`
	width: 20px;
	font-size: 30px;
`
const SelectTitle = styled.span`
	width: 200px;
	text-align: start;
`

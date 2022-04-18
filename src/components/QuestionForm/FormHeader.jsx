import React from 'react'
import styled from 'styled-components'
import formImage from '../../assets/icon/forms_image.png'

export const FormHeader = () => {
	return (
		<Header>
			<Wrapper>
				<img src={formImage} style={{ width: '45px' }} />
				<input placeholder='Новая форма' />
				<img />
				<img />
			</Wrapper>
			<Container>
				<span>
					<img
						src='https://cdn4.iconfinder.com/data/icons/gambling-15/48/94-512.png'
						style={{ width: '35px' }}
					/>
				</span>
				<button>Отправить</button>
				<span>
					<img src='https://www.svgrepo.com/show/391274/menu-kebab.svg' />
				</span>
				<span>
					<img
						src='https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg'
						style={{ width: '40px' }}
					/>
				</span>
			</Container>
		</Header>
	)
}

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 15px;
	background-color: #fff;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-left: 5px;
	cursor: pointer;
	& input {
		border: none;
		outline: none;
		font-family: 'Google Sans', Roboto, Arial, sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
		margin-left: 15px;
		color: #202124;
		width: 120px;
		&:focus {
			border-bottom: 2px solid rgb(103, 58, 183);
		}
		&::placeholder {
			color: #202124;
		}
	}
`
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	& span {
		margin: 0px 10px;
	}
	& button {
		width: 120px;
		margin: 0px 20px;
		height: 35px;
		border: none;
		border-radius: 5px;
		background-color: rgb(103, 58, 183);
		color: white;
		font-size: 16px;
		padding: 4px;
		cursor: pointer;
		&:hover {
			width: 122px;
			height: 37px;
		}
	}
`

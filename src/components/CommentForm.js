import React, { Component } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'

class CommentForm extends Component {
  state = {
    text: '',
    user: ''
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      text: e.target.value
    })
  }

  handleUserChange = e => {
    e.preventDefault()
    this.setState({
      user: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const { text, user } = this.state
    const id = shortid()
    const comment = {
      body: text,
      id,
      user,
      course: this.props.id
    }
    this.props.addComment(comment)
    this.setState({
      text: '',
      user: ''
    })
  }

  render() {
    const { text, user } = this.state
    return (
      <Wrap>
        <NameInput
          placeholder="名字"
          value={user}
          onChange={this.handleUserChange}
        />
        <CommentInput
          placeholder="评论"
          value={text}
          onChange={this.handleChange}
        />
        <StyledButton onClick={this.handleClick} raised color="accent">
          评论
        </StyledButton>
      </Wrap>
    )
  }
}

export default CommentForm

const Wrap = styled.div`
  display: flex;
`
const CommentInput = styled(Input)`
  flex-grow: 1;
  margin-right: 10px;
`

const NameInput = styled(Input) `
  margin-right: 10px;
`

const StyledButton = styled(Button)`
  color: white;
`

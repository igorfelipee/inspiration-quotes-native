import React from 'react'
import { Button, Text, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { SimpleAnimation } from 'react-native-simple-animations'
import styled from 'styled-components'

export default class QuoteScreen extends React.Component {
    componentDidMount() {
        this.props.getQuote()
    }
    render() {
        const { getQuote } = this.props
        const { quote, author } = this.props.quoteState.quote
        return (
            <ViewStyled>
                <SimpleAnimation delay={200} duration={500} fade>
                    <TitleStyled>
                        Inspiring quote <EmojiStyled name="purple_heart" />:
                    </TitleStyled>
                </SimpleAnimation>
                <SimpleAnimation
                    delay={400}
                    duration={500}
                    fade
                    animateOnUpdate={true}
                    staticType="zoom">
                    <PhraseStyled>{quote}</PhraseStyled>
                    <AuthorStyled>{author}</AuthorStyled>
                </SimpleAnimation>
                <Button
                    onPress={getQuote}
                    title="Give another one"
                    color="palevioletred"
                />
            </ViewStyled>
        )
    }
}
const ViewStyled = styled(View)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    text-align: center;
`
const EmojiStyled = styled(Emoji)`
    text-align: center;
    font-size: 25px;
`

const TitleStyled = styled(Text)`
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`

const PhraseStyled = styled(Text)`
    color: palevioletred;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    max-width: 95%;
    margin-bottom: 10px;
`
const AuthorStyled = styled(Text)`
    color: white;
    font-size: 15px;
    text-align: center;
`

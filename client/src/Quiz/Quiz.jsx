import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Question from '../Question/Question';
import { Box } from '@mui/material/';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const quizData = {
    quizTitle: "How well do you know marvel ?",
    questions: [
        {
            question: "What is your name ?",
            options: [
                "Iron-Man", "Bruce-Banner", "Archie Andrews",
                "Harry Potter",
            ]
        },
        {
            question: "What is your name ?",
            options: [
                "Iron-Man", "Bruce-Banner", "Archie Andrews",
                "Harry Potter",
            ]
        },
        {
            question: "What is your name ?",
            options: [
                "Iron-Man", "Bruce-Banner", "Archie Andrews",
                "Harry Potter",
            ]
        }
    ]
}
const Quiz = () => {
    const theme = createTheme()
    const handleQuizSubmit = async () => {
        alert("Submit Done")
    }
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: '#1A73E8',
                    height: '100%'
                }}
            >
                <Container maxWidth={'80%'} component={'div'}>
                    <Typography component={'h1'} variant='h1'
                        sx={{
                            color: 'white',
                            fontFamily: "Raleway",
                            fontSize: { xs: "55px", md: "90px" },
                            pt: { sm: '20px', md: '40px' },
                            pb: { md: '90px' },
                            textAlign: 'center'

                        }}
                    >
                        {quizData.quizTitle}
                    </Typography>
                </Container>
                <Container maxWidth={'md'} component={'div'}>
                    {quizData.questions.map((question) => {
                        return <Question questionData={question} />
                    })}
                </Container>
                <Container maxWidth={'md'} component={'div'}>
                    <Button fullWidth variant="outlined"
                        sx={{
                            mt: 2,
                            mb: 3,
                            paddingX: 5.5,
                            paddingY: 1.8,
                            borderRadius: 2,
                            backgroundColor: 'white',
                            color: '#1967D2',
                            fontSize: 19,
                            fontWeight: 500,
                            textTransform: 'none'
                        }}
                        onClick={handleQuizSubmit}
                    >Submit</Button>
                </Container>

            </Box>
        </ThemeProvider>
    )
}

export default Quiz;
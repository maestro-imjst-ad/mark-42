import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const color = "#71357C"
const courseData =
{
    courseName: "Management Economics",
    courseCode: "19HS61",
    examsData: [
        { examName: 'CIE 1 Test', maxMarks: 50, score: 44 },
        { examName: 'CIE 1 Quiz', maxMarks: 10, score: 7 },
        { examName: 'CIE 2 Test', maxMarks: 50, score: 49 },
        { examName: 'CIE 2 Quiz', maxMarks: 10, score: 8 },
        { examName: 'CIE 3 Test', maxMarks: 50, score: 47 },
        { examName: 'CIE 3 Quiz', maxMarks: 10, score: 9 },
    ]
}

const Course = () => {
    return (
        <Box component={'div'} className='course'
            sx={{
                fontFamily: 'Raleway, sans-serif ',

                width: '100vw'
            }}
        >
            <Box component={'div'} className="personal-details"
                sx={{
                    color: "white",
                    paddingBottom: { xs: "6rem", md: "10rem" },
                    paddingTop: "2rem",
                    backgroundColor: '#1A73E8',
                }}
            >
                <Typography component={'h1'} align='center'
                    sx={{ fontSize: { xs: '45px', md: '80px' } }}
                >
                    {courseData.courseName}
                </Typography>
                <Typography component={'h3'} align='center'
                    sx={{ fontSize: { xs: '15px', md: '30px' } }}
                >
                    {courseData.courseCode}
                </Typography>
            </Box>
            <Box component={'div'} className="courses-details"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: { xs: '-4rem', md: '-8rem' },
                    backgroundColor: "white",
                    marginX: {
                        xs: "1rem",
                        md: '7rem'
                    },
                    border: '1px solid lightgrey',
                    borderRadius: '5px'
                }}
            >

                <Grid container
                    sx={{
                        margin: '1rem'

                    }}
                >

                    {
                        courseData.examsData.map((d, i) => {
                            return (
                                <Grid item xs={12}>
                                    <Box component={'div'} className='course'
                                    >
                                        <Typography component={'h2'}
                                            center
                                            style={{
                                                backgroundColor: color,
                                                border: '1px solid ' + color,
                                            }}
                                            sx={{

                                                color: "white",
                                                fontSize: "1.7rem",
                                                padding: "2rem",
                                                paddingY: "5rem",
                                                borderRadius: '5px',
                                                border: '1px solid #71357C',
                                                margin: '1rem',

                                            }}
                                        >
                                            {d.examName + "     " + `${d.score}` + "/" + `${d.maxMarks}`}
                                        </Typography>
                                    </Box>
                                </Grid>

                            )
                        })
                    }
                </Grid>

            </Box>
        </Box>

    )
}

export default Course;

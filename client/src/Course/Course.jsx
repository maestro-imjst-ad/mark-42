import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getCourseDetails } from '../helpers';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const color = "#71357C"


const Course = () => {
    const params = useParams()
    const cid = params.id
    const [courseData,setCourseData]=useState()
    // useEffect(()=>{
    //     const dummy =async()=>{
    //         const course = await getCourseDetails(cid)
    //         setCourseData(course);
    //     }
    //     dummy();
    // },[])

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

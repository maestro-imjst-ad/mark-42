import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const colorArray = ["#71357C", "#95D0D5", "#FD7E50", "#EAC4D5", "#023C3D", "#809BCE"]
const dashData = {
    name: "Taufeeeq Ahmed",
    usn: "1RV19ET025",
    email: "jshaiktaufeeqa.te19@rvce.edu.in",
    courses: [
        {
            courseName: "Management Economics",
            courseCode: "19HS61",
        },
        {
            courseName: "Antenna & Propagation",
            courseCode: "18TE62",
        },
        {
            courseName: "Communication Networks",
            courseCode: "18TE63",
        },
        {
            courseName: "Operating Systems",
            courseCode: "18TEG61",
        },
        {
            courseName: "Data Structures & Algorithms",
            courseCode: "18TEG62",
        },
        {
            courseName: "Systems Engineering",
            courseCode: "18GE63",
        },

    ]

}
const Dashboard = () => {
    return (
        <Box component={'div'} className='dashboard'
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
                    {dashData.name}
                </Typography>
                <Typography component={'h3'} align='center'
                    sx={{ fontSize: { xs: '15px', md: '30px' } }}
                >
                    {dashData.email}
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
                        dashData.courses.map((cr, i) => {
                            console.log(i)
                            return (
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box component={'div'} className='course'

                                    >
                                        <Typography component={'h2'}
                                            center
                                            style={{
                                                backgroundColor: colorArray[i],
                                                border: '1px solid ' + colorArray[i],
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
                                            {cr.courseName} - {cr.courseCode}
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

export default Dashboard

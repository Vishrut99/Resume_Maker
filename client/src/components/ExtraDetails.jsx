import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Box,
  Divider,
  Paper
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api";

// Import your Redux actions
import {
  addSkills,
  addAchievements,
  updateSkills,
  updateAchievements,
  updateExtraCoCurricular,
  addExtraCoCurricular,
  deleteSkills,
  deleteAchievements,
  deleteExtraCoCurricular,
} from "../redux/extraDetailsSlice";

const ExtraDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const extraDetails = useSelector((state) => state.extraDetails);
  const profileData = useSelector((state) => state.profileDetails);
  const educationalData = useSelector((state) => state.educationDetails);
  const projectData = useSelector((state) => state.projectDetails);
  const experienceData = useSelector((state) => state.experienceDetails);
  const extraDetailsData = useSelector((state) => state.extraDetails);
  const [loading, setLoading] = useState(false);

  // Theme colors
  const theme = {
    primary: '#1976d2',
    primaryHover: '#1565c0',
    secondary: '#dc004e',
    background: '#f5f5f5',
    white: '#ffffff'
  };

  // Skill categories configuration
  const skillCategories = [
    {
      type: 'languages',
      title: 'Programming Languages',
      placeholder: 'Language',
      tooltip: 'e.g., C, C++, Java, Python, JavaScript',
      buttonText: 'Add Language'
    },
    {
      type: 'web',
      title: 'Web Development Skills',
      placeholder: 'Web Skill',
      tooltip: 'e.g., HTML, CSS, JavaScript, TypeScript',
      buttonText: 'Add Web Skill'
    },
    {
      type: 'webFrameworks',
      title: 'Web Frameworks/Libraries',
      placeholder: 'Framework',
      tooltip: 'e.g., React, Angular, Next.js, Bootstrap',
      buttonText: 'Add Framework'
    },
    {
      type: 'databases',
      title: 'Databases',
      placeholder: 'Database',
      tooltip: 'e.g., MySQL, MongoDB, PostgreSQL',
      buttonText: 'Add Database'
    },
    {
      type: 'other',
      title: 'Other Skills',
      placeholder: 'Skill',
      tooltip: 'e.g., Leadership, Management, Teamwork',
      buttonText: 'Add Other Skill'
    }
  ];

  const handleAddItem = (type) => {
    if (type === "achievements") {
      dispatch(addAchievements());
    } else if (type === "extraCoCurricular") {
      dispatch(addExtraCoCurricular());
    } else {
      dispatch(addSkills({ type }));
    }
  };

  const handleInputChange = (index, type, value) => {
    if (skillCategories.some(cat => cat.type === type)) {
      dispatch(updateSkills({ type, index, value }));
    } else if (type === "achievements") {
      dispatch(updateAchievements({ index, value }));
    } else if (type === "extraCoCurricular") {
      dispatch(updateExtraCoCurricular({ index, value }));
    }
  };

  const handleDeleteItem = (index, type) => {
    if (type === "achievements") {
      dispatch(deleteAchievements(index));
    } else if (type === "extraCoCurricular") {
      dispatch(deleteExtraCoCurricular(index));
    } else {
      dispatch(deleteSkills({ type, index }));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const resumeData = {
      profile: profileData,
      education: educationalData,
      projects: projectData,
      experience: experienceData,
      extraDetails: extraDetailsData,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/data/resume-data?id=${currentUser._id}`,
        { resumeData },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
      
      toast.success("Data Saved Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (error) {
      toast.error("Error saving data. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      console.error("Error in addResumeData:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderSkillSection = (category) => {
    const skillsData = extraDetails?.skills?.[category.type] || [];
    
    return (
      <Paper elevation={1} sx={{ p: 3, mb: 3 }} key={category.type}>
        <Typography 
          variant="h6" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            mb: 2,
            color: theme.primary 
          }}
        >
          {category.title}
          <Tooltip
            title={<Box sx={{ p: 1, fontSize: '0.9rem' }}>{category.tooltip}</Box>}
            placement="top"
            arrow
          >
            <InfoIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />
          </Tooltip>
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label={`${category.placeholder} ${index + 1}`}
                  value={skill}
                  onChange={(e) =>
                    handleInputChange(index, category.type, e.target.value)
                  }
                />
                <IconButton 
                  onClick={() => handleDeleteItem(index, category.type)}
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          onClick={() => handleAddItem(category.type)}
          sx={{
            backgroundColor: theme.primary,
            '&:hover': { backgroundColor: theme.primaryHover }
          }}
        >
          {category.buttonText}
        </Button>
      </Paper>
    );
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
      <Card elevation={3}>
        <CardHeader
          title={
            <Typography variant="h4" align="center" fontWeight="bold">
              Extra Details
            </Typography>
          }
          sx={{ backgroundColor: theme.background }}
        />
        
        <CardContent sx={{ p: 4 }}>
          {/* Skills Section */}
          <Typography variant="h5" sx={{ mb: 3, color: theme.primary }}>
            Skills
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          {skillCategories.map(category => renderSkillSection(category))}

          {/* Achievements Section */}
          <Typography variant="h5" sx={{ mb: 3, mt: 4, color: theme.primary }}>
            Achievements
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {extraDetails?.achievements?.map((achievement, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label={`Achievement ${index + 1}`}
                      value={achievement}
                      onChange={(e) =>
                        handleInputChange(index, "achievements", e.target.value)
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmojiEventsIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <IconButton 
                      onClick={() => handleDeleteItem(index, "achievements")}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Button
              variant="contained"
              startIcon={<EmojiEventsIcon />}
              onClick={() => handleAddItem("achievements")}
              sx={{
                backgroundColor: theme.primary,
                '&:hover': { backgroundColor: theme.primaryHover }
              }}
            >
              Add Achievement
            </Button>
          </Paper>

          {/* Extra Curricular Activities Section */}
          <Typography variant="h5" sx={{ mb: 3, mt: 4, color: theme.primary }}>
            Extra Curricular Activities
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {extraDetails?.extraCoCurricular?.map((activity, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label={`Activity ${index + 1}`}
                      value={activity}
                      onChange={(e) =>
                        handleInputChange(index, "extraCoCurricular", e.target.value)
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <AutoAwesomeIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <IconButton 
                      onClick={() => handleDeleteItem(index, "extraCoCurricular")}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Button
              variant="contained"
              startIcon={<AutoAwesomeIcon />}
              onClick={() => handleAddItem("extraCoCurricular")}
              sx={{
                backgroundColor: theme.primary,
                '&:hover': { backgroundColor: theme.primaryHover }
              }}
            >
              Add Activity
            </Button>
          </Paper>

          {/* Save Notice */}
          <Box sx={{ textAlign: 'center', mt: 4, mb: 3 }}>
            <Typography variant="body2" color="error">
              *Please save your data to preserve changes for future editing
            </Typography>
          </Box>

          {/* Save Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              disabled={loading}
              sx={{
                backgroundColor: theme.secondary,
                '&:hover': { backgroundColor: '#b8003d' },
                px: 4,
                py: 1.5
              }}
            >
              {loading ? 'Saving...' : 'Save Your Data'}
            </Button>
          </Box>

          {/* Navigation */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mt: 4,
            px: 2
          }}>
            <Link 
              to="/experience" 
              style={{ 
                textDecoration: 'none', 
                color: theme.primary,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}
            >
              <ArrowBackIcon />
              <Typography variant="h6">Experience Section</Typography>
            </Link>
            
            <Link 
              to="/templates" 
              style={{ 
                textDecoration: 'none', 
                color: theme.primary,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}
            >
              <Typography variant="h6">Resume Templates</Typography>
              <ArrowForwardIcon />
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ExtraDetails;
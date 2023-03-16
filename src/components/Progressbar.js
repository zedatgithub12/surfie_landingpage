import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Get start',
    description: `Press get started button and create account, select number of
    license and pay the subscription fee.`,
  },
  {
    label: 'Downlaod Parent Application',
    description:`There is an email sent to email address provided while creating an
      account the email and click download parent app link and download
      parent app`,
  },
  {
    label: 'Download Child Application',
    description: `Download child app on child device and enter your email in the
    parent email field and click finish`,
  },
  {
    label: 'Last Step done setup ',
    description: `Tada! it’s done you have set all account setup! if you are looking for how to manage your account online Sign in`,
  },

 
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <button type="button"  className="mt-2 p-2 btncolor"
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </button>

                  <button type="button"  href="/" class=" ms-3 btn btn-light border border-2 "
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <button type="button" className="mt-3 btn btn-light border border-2" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </button>
        </Paper>
      )}
    </Box>
  );
}
 
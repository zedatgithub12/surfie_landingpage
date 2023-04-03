import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';


const steps = [
  {
    label: <h6>Get started</h6>,
    description: <p>Press get started button and create account, select number of
    license and pay the subscription fee.</p>,
  },
  {
    label: <h6>Downlaod Parent Application</h6>,
    description:<p>There is an email sent to email address provided while creating an
      account, click download parent app link and download
      parent app and signin using your email.</p>,
  },
  {
    label: <h6>Download Child Application</h6>,
    description: <p>Download child app on child device and enter your email in the
    parent email field and click finish</p>,
  },
  {
    label: <h6>Last Step </h6>,
    description: <p>Tada! it’s done you have set all account setup! if you have any challenge setting-up your account contact us anytime</p>,
  },

 
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { t } = useTranslation();


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
    <Box className="text-muted" sx={{ maxWidth: 1000 }}>
      <Stepper  activeStep={activeStep} orientation="vertical">
        {steps.map ((step, index) => (
          <Step key={step.label}>
            <StepLabel
              
              optional={
                index === 3 ? (
                  <Typography className="primary-bg text-white" variant="caption" >{t('Last step')}</Typography>
                ) : null


              }
            >
               <Typography className='text-dark fw-semibold' variant="caption">{step.label}</Typography>
             
            </StepLabel>
            <StepContent>
              <Typography className='text-dark'>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <button type="button"  className="mt-2 p-2 btncolor"
                    variant="light"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {t(index === steps.length - 1 ? 'Finish' : 'Continue')}
                  </button>

                  <button type="button"  href="/" class=" ms-3 btn btn-white text-dark fw-normal border-0 "
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {t('Back')}
                  </button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }} className="bg-light rounded-4">
          <Typography className="primary-bg" >{t('All steps completed happy parenting')}</Typography>
          <button type="button" className="mt-3 btn btn-light shadow-sm px-4 text-muted" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            {t('Reset')}
          </button>
        </Paper>
      )}
    </Box>
  );
}
 
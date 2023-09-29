import { useState } from 'react'
import { Box, Button, Typography } from '../../components/shared/material'
import labels from '../../constants/labels';
import AppbarLanding from '../../components/AppbarLanding/AppbarLanding';
import Background from '../../components/Background/Background';
import BackgroundLower from '../../components/BackgroundLower/BackgroundLower';

const navigation = [
  { name: labels.en.appbar.product , href: '#' },
  { name: labels.en.appbar.features, href: '#' },
  { name: labels.en.appbar.pricing, href: '#' },
]

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">

      <div className="min-h-full">
        <AppbarLanding/>
      </div>

      <Background />

      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">

            <Box display="flex" 
              justifyContent="center">
              <Typography variant='h2' textColor='colorGrey' textWeight='bold'>
                {labels.en.titleFirst}
              </Typography>
              <Typography variant='h2' textColor='colorDark' textWeight='bold'>
                {labels.en.titleSecond}
              </Typography>
            </Box>

            <Typography variant='h6' textColor='colorGrey'>
              {labels.en.landing.header}
            </Typography>

            <Box 
              display="flex" 
              justifyContent="center"
              alignItems="center"
              gap={2}
              className="pt-16">
              <Button variant='contained'>
                {labels.en.landing.register}
              </Button>
              <Button variant='outlined'>
                {labels.en.landing.learn}
              </Button>
            </Box>
          </div>
        </div>
        
        <BackgroundLower />

      </div>
    </div>
  )
}

export default Landing
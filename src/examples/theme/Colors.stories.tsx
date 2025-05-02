import { Box, Grid, PaletteColor, Stack, Typography, useTheme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

type PalettePreviewProps = {
  title: string
  onTitle: string
  titleColor: PaletteColor
  onTitleColor: PaletteColor
}

const PalettePreview = ({ title, onTitle, titleColor, onTitleColor }: PalettePreviewProps) => {
  return (
    <Stack sx={{ height: 'auto' }}>
      <Box
        sx={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'start',
          px: 1,
          pt: 1,
          pb: 3,
          bgcolor: titleColor.main,
          color: onTitleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {title}
          <br />
          {titleColor.main.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 1,
          bgcolor: onTitleColor.main,
          color: titleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {onTitle} <br /> {onTitleColor.main.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  )
}

type PalettePreviewSurfaceProps = {
  title: string
  titleColor: PaletteColor
  onTitleColor: PaletteColor
}

const PalettePreviewSurface = ({ title, titleColor, onTitleColor }: PalettePreviewSurfaceProps) => {
  return (
    <Stack sx={{ height: 'auto' }}>
      <Box
        sx={{
          px: 1,
          py: 2,
          bgcolor: titleColor.main,
          color: onTitleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {title} <br /> {titleColor.main.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  )
}

export const PreviewColors = () => {
  const { palette } = useTheme()

  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ m: 1 }}>
        {palette.mode === 'light' ? 'Light Theme' : 'Dark Theme'}
      </Typography>
      <Grid container spacing={2}>
        <Grid size={3}>
          <PalettePreview
            title="Primary"
            titleColor={palette.primary}
            onTitle="OnPrimary"
            onTitleColor={palette.onPrimary as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Secondary"
            titleColor={palette.secondary}
            onTitle="OnSecondary"
            onTitleColor={palette.onSecondary as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Tertiary"
            titleColor={palette.tertiary as PaletteColor}
            onTitle="OnTertiary"
            onTitleColor={palette.onTertiary as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Error"
            titleColor={palette.error}
            onTitle="OnError"
            onTitleColor={palette.onError as PaletteColor}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreview
            title="PrimaryContainer"
            titleColor={palette.primaryContainer as PaletteColor}
            onTitle="OnPrimaryContainer"
            onTitleColor={palette.onPrimaryContainer as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="SecondaryContainer"
            titleColor={palette.secondaryContainer as PaletteColor}
            onTitle="OnSecondaryContainer"
            onTitleColor={palette.onSecondaryContainer as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="TertiaryContainer"
            titleColor={palette.tertiaryContainer as PaletteColor}
            onTitle="OnTertiaryContainer"
            onTitleColor={palette.onTertiaryContainer as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="ErrorContainer"
            titleColor={palette.errorContainer as PaletteColor}
            onTitle="OnErrorContainer"
            onTitleColor={palette.onErrorContainer as PaletteColor}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={3}>
          <PalettePreviewSurface
            title="PrimaryFixed"
            titleColor={palette.primaryFixed as PaletteColor}
            onTitleColor={palette.onPrimaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="PrimaryFixedDim"
            titleColor={palette.primaryFixedDim as PaletteColor}
            onTitleColor={palette.onPrimaryFixedVariant as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnPrimaryFixed"
            titleColor={palette.onPrimaryFixed as PaletteColor}
            onTitleColor={palette.primaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnPrimaryFixedVariant"
            titleColor={palette.onPrimaryFixedVariant as PaletteColor}
            onTitleColor={palette.primaryFixedDim as PaletteColor}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="SecondaryFixed"
            titleColor={palette.secondaryFixed as PaletteColor}
            onTitleColor={palette.onSecondaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="SecondaryFixedDim"
            titleColor={palette.secondaryFixedDim as PaletteColor}
            onTitleColor={palette.onSecondaryFixedVariant as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSecondaryFixed"
            titleColor={palette.onSecondaryFixed as PaletteColor}
            onTitleColor={palette.secondaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSecondaryFixedVariant"
            titleColor={palette.onSecondaryFixedVariant as PaletteColor}
            onTitleColor={palette.secondaryFixedDim as PaletteColor}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="TertiaryFixed"
            titleColor={palette.tertiaryFixed as PaletteColor}
            onTitleColor={palette.onTertiaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="TertiaryFixedDim"
            titleColor={palette.tertiaryFixedDim as PaletteColor}
            onTitleColor={palette.onTertiaryFixedVariant as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnTertiaryFixed"
            titleColor={palette.onTertiaryFixed as PaletteColor}
            onTitleColor={palette.tertiaryFixed as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnTertiaryFixedVariant"
            titleColor={palette.onTertiaryFixedVariant as PaletteColor}
            onTitleColor={palette.tertiaryFixedDim as PaletteColor}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreviewSurface
            title="SurfaceDim"
            titleColor={palette.surfaceDim as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Surface"
            titleColor={palette.surface as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="SurfaceBright"
            titleColor={palette.surfaceBright as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerLowest"
            titleColor={palette.surfaceContainerLowest as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerLow"
            titleColor={palette.surfaceContainerLow as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. Container"
            titleColor={palette.surfaceContainer as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerHigh"
            titleColor={palette.surfaceContainerHigh as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerHighest"
            titleColor={palette.surfaceContainerHighest as PaletteColor}
            onTitleColor={palette.onSurface as PaletteColor}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSurface"
            titleColor={palette.onSurface as PaletteColor}
            onTitleColor={palette.surface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSurfaceVariant"
            titleColor={palette.onSurfaceVariant as PaletteColor}
            onTitleColor={palette.surface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Outline"
            titleColor={palette.outline as PaletteColor}
            onTitleColor={palette.surface as PaletteColor}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OutlineVariant"
            titleColor={palette.outlineVariant as PaletteColor}
            onTitleColor={palette.inverseSurface as PaletteColor}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreview
            title="InverseSurface"
            titleColor={palette.inverseSurface as PaletteColor}
            onTitle="InverseOnSurface"
            onTitleColor={palette.inverseOnSurface as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="InversePrimary"
            titleColor={palette.inversePrimary as PaletteColor}
            onTitleColor={palette.onPrimaryContainer as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Scrim"
            titleColor={palette.scrim as PaletteColor}
            onTitleColor={palette.inversePrimary as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Shadow"
            titleColor={palette.shadow as PaletteColor}
            onTitleColor={palette.inversePrimary as PaletteColor}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" fontWeight="bold" sx={{ m: 1, mt: 2 }}>
        Custom Colors
      </Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreview
            title="Info"
            titleColor={palette.info}
            onTitle="OnInfo"
            onTitleColor={palette.onInfo as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="Warning"
            titleColor={palette.warning}
            onTitle="OnWarning"
            onTitleColor={palette.onWarning as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="Success"
            titleColor={palette.success}
            onTitle="OnSuccess"
            onTitleColor={palette.onSuccess as PaletteColor}
          />
        </Grid>

        <Grid size={4}>
          <PalettePreview
            title="InfoContainer"
            titleColor={palette.infoContainer as PaletteColor}
            onTitle="OnInfoContainer"
            onTitleColor={palette.onInfoContainer as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="WarningContainer"
            titleColor={palette.warningContainer as PaletteColor}
            onTitle="OnWarningContainer"
            onTitleColor={palette.onWarningContainer as PaletteColor}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="SuccessContainer"
            titleColor={palette.successContainer as PaletteColor}
            onTitle="OnSuccesContainer"
            onTitleColor={palette.onSuccessContainer as PaletteColor}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

const meta: Meta<typeof PreviewColors> = {
  title: 'Theme/Colors',
  component: PreviewColors,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {},
  includeStories: ['AllColors'],
}

export default meta
type Story = StoryObj<typeof PreviewColors>

export const AllColors: Story = {
  render: () => <PreviewColors />,
}

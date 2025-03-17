import React, { useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { state } from './store'

// This component preloads the decal textures once on mount.
export function PreloadDecals() {
  useEffect(() => {
    if (state.decals && state.decals.length > 0) {
      const decalUrls = state.decals.map((decal) => decal.full)
      useTexture.preload(decalUrls)
    }
  }, [])

  return null
}

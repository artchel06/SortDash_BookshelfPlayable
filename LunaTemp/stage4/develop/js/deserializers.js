var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.JointSpring' )
  var i829 = data
  i828.spring = i829[0]
  i828.damper = i829[1]
  i828.targetPosition = i829[2]
  return i828
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.JointMotor' )
  var i831 = data
  i830.m_TargetVelocity = i831[0]
  i830.m_Force = i831[1]
  i830.m_FreeSpin = i831[2]
  return i830
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.JointLimits' )
  var i833 = data
  i832.m_Min = i833[0]
  i832.m_Max = i833[1]
  i832.m_Bounciness = i833[2]
  i832.m_BounceMinVelocity = i833[3]
  i832.m_ContactDistance = i833[4]
  i832.minBounce = i833[5]
  i832.maxBounce = i833[6]
  return i832
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.JointDrive' )
  var i835 = data
  i834.m_PositionSpring = i835[0]
  i834.m_PositionDamper = i835[1]
  i834.m_MaximumForce = i835[2]
  i834.m_UseAcceleration = i835[3]
  return i834
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i837 = data
  i836.m_Spring = i837[0]
  i836.m_Damper = i837[1]
  return i836
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i839 = data
  i838.m_Limit = i839[0]
  i838.m_Bounciness = i839[1]
  i838.m_ContactDistance = i839[2]
  return i838
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i841 = data
  i840.m_ExtremumSlip = i841[0]
  i840.m_ExtremumValue = i841[1]
  i840.m_AsymptoteSlip = i841[2]
  i840.m_AsymptoteValue = i841[3]
  i840.m_Stiffness = i841[4]
  return i840
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i843 = data
  i842.m_LowerAngle = i843[0]
  i842.m_UpperAngle = i843[1]
  return i842
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i845 = data
  i844.m_MotorSpeed = i845[0]
  i844.m_MaximumMotorTorque = i845[1]
  return i844
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i847 = data
  i846.m_DampingRatio = i847[0]
  i846.m_Frequency = i847[1]
  i846.m_Angle = i847[2]
  return i846
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i849 = data
  i848.m_LowerTranslation = i849[0]
  i848.m_UpperTranslation = i849[1]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i851 = data
  i850.name = i851[0]
  i850.halfPrecision = !!i851[1]
  i850.useUInt32IndexFormat = !!i851[2]
  i850.vertexCount = i851[3]
  i850.aabb = i851[4]
  var i853 = i851[5]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( !!i853[i + 0] );
  }
  i850.streams = i852
  i850.vertices = i851[6]
  var i855 = i851[7]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i855[i + 0]) );
  }
  i850.subMeshes = i854
  var i857 = i851[8]
  var i856 = []
  for(var i = 0; i < i857.length; i += 16) {
    i856.push( new pc.Mat4().setData(i857[i + 0], i857[i + 1], i857[i + 2], i857[i + 3],  i857[i + 4], i857[i + 5], i857[i + 6], i857[i + 7],  i857[i + 8], i857[i + 9], i857[i + 10], i857[i + 11],  i857[i + 12], i857[i + 13], i857[i + 14], i857[i + 15]) );
  }
  i850.bindposes = i856
  var i859 = i851[9]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i859[i + 0]) );
  }
  i850.blendShapes = i858
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i865 = data
  i864.triangles = i865[0]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i871 = data
  i870.name = i871[0]
  var i873 = i871[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i873[i + 0]) );
  }
  i870.frames = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i874 = root || new pc.UnityMaterial()
  var i875 = data
  i874.name = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'shader')
  i874.renderQueue = i875[3]
  i874.enableInstancing = !!i875[4]
  var i877 = i875[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i877[i + 0]) );
  }
  i874.floatParameters = i876
  var i879 = i875[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i879[i + 0]) );
  }
  i874.colorParameters = i878
  var i881 = i875[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i881[i + 0]) );
  }
  i874.vectorParameters = i880
  var i883 = i875[8]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i883[i + 0]) );
  }
  i874.textureParameters = i882
  var i885 = i875[9]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i885[i + 0]) );
  }
  i874.materialFlags = i884
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i893 = data
  i892.name = i893[0]
  i892.value = new pc.Color(i893[1], i893[2], i893[3], i893[4])
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i897 = data
  i896.name = i897[0]
  i896.value = new pc.Vec4( i897[1], i897[2], i897[3], i897[4] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i901 = data
  i900.name = i901[0]
  request.r(i901[1], i901[2], 0, i900, 'value')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i905 = data
  i904.name = i905[0]
  i904.enabled = !!i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i907 = data
  i906.name = i907[0]
  i906.width = i907[1]
  i906.height = i907[2]
  i906.mipmapCount = i907[3]
  i906.anisoLevel = i907[4]
  i906.filterMode = i907[5]
  i906.hdr = !!i907[6]
  i906.format = i907[7]
  i906.wrapMode = i907[8]
  i906.alphaIsTransparency = !!i907[9]
  i906.alphaSource = i907[10]
  i906.graphicsFormat = i907[11]
  i906.sRGBTexture = !!i907[12]
  i906.desiredColorSpace = i907[13]
  i906.wrapU = i907[14]
  i906.wrapV = i907[15]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i909 = data
  i908.position = new pc.Vec3( i909[0], i909[1], i909[2] )
  i908.scale = new pc.Vec3( i909[3], i909[4], i909[5] )
  i908.rotation = new pc.Quat(i909[6], i909[7], i909[8], i909[9])
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'sharedMesh')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'additionalVertexStreams')
  i912.enabled = !!i913[2]
  request.r(i913[3], i913[4], 0, i912, 'sharedMaterial')
  var i915 = i913[5]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.sharedMaterials = i914
  i912.receiveShadows = !!i913[6]
  i912.shadowCastingMode = i913[7]
  i912.sortingLayerID = i913[8]
  i912.sortingOrder = i913[9]
  i912.lightmapIndex = i913[10]
  i912.lightmapSceneIndex = i913[11]
  i912.lightmapScaleOffset = new pc.Vec4( i913[12], i913[13], i913[14], i913[15] )
  i912.lightProbeUsage = i913[16]
  i912.reflectionProbeUsage = i913[17]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i919 = data
  i918.playAutomatically = !!i919[0]
  request.r(i919[1], i919[2], 0, i918, 'clip')
  var i921 = i919[3]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.clips = i920
  i918.wrapMode = i919[4]
  i918.enabled = !!i919[5]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i925 = data
  i924.center = new pc.Vec3( i925[0], i925[1], i925[2] )
  i924.size = new pc.Vec3( i925[3], i925[4], i925[5] )
  i924.enabled = !!i925[6]
  i924.isTrigger = !!i925[7]
  request.r(i925[8], i925[9], 0, i924, 'material')
  return i924
}

Deserializers["Drag3DWithEvents"] = function (request, data, root) {
  var i926 = root || request.c( 'Drag3DWithEvents' )
  var i927 = data
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i929 = data
  i928.name = i929[0]
  i928.tagId = i929[1]
  i928.enabled = !!i929[2]
  i928.isStatic = !!i929[3]
  i928.layer = i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i931 = data
  i930.name = i931[0]
  i930.atlasId = i931[1]
  i930.mipmapCount = i931[2]
  i930.hdr = !!i931[3]
  i930.size = i931[4]
  i930.anisoLevel = i931[5]
  i930.filterMode = i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 4) {
    i932.push( UnityEngine.Rect.MinMaxRect(i933[i + 0], i933[i + 1], i933[i + 2], i933[i + 3]) );
  }
  i930.rects = i932
  i930.wrapU = i931[8]
  i930.wrapV = i931[9]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i937 = data
  i936.name = i937[0]
  i936.index = i937[1]
  i936.startup = !!i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i939 = data
  i938.enabled = !!i939[0]
  i938.aspect = i939[1]
  i938.orthographic = !!i939[2]
  i938.orthographicSize = i939[3]
  i938.backgroundColor = new pc.Color(i939[4], i939[5], i939[6], i939[7])
  i938.nearClipPlane = i939[8]
  i938.farClipPlane = i939[9]
  i938.fieldOfView = i939[10]
  i938.depth = i939[11]
  i938.clearFlags = i939[12]
  i938.cullingMask = i939[13]
  i938.rect = i939[14]
  request.r(i939[15], i939[16], 0, i938, 'targetTexture')
  i938.usePhysicalProperties = !!i939[17]
  i938.focalLength = i939[18]
  i938.sensorSize = new pc.Vec2( i939[19], i939[20] )
  i938.lensShift = new pc.Vec2( i939[21], i939[22] )
  i938.gateFit = i939[23]
  i938.commandBufferCount = i939[24]
  i938.cameraType = i939[25]
  return i938
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i941 = data
  i940.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i941[0] )
  i940.m_MaxRayIntersections = i941[1]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i943 = data
  i942.enabled = !!i943[0]
  i942.type = i943[1]
  i942.color = new pc.Color(i943[2], i943[3], i943[4], i943[5])
  i942.cullingMask = i943[6]
  i942.intensity = i943[7]
  i942.range = i943[8]
  i942.spotAngle = i943[9]
  i942.shadows = i943[10]
  i942.shadowNormalBias = i943[11]
  i942.shadowBias = i943[12]
  i942.shadowStrength = i943[13]
  i942.shadowResolution = i943[14]
  i942.lightmapBakeType = i943[15]
  i942.renderMode = i943[16]
  request.r(i943[17], i943[18], 0, i942, 'cookie')
  i942.cookieSize = i943[19]
  return i942
}

Deserializers["MoveTray"] = function (request, data, root) {
  var i944 = root || request.c( 'MoveTray' )
  var i945 = data
  return i944
}

Deserializers["GameManager"] = function (request, data, root) {
  var i946 = root || request.c( 'GameManager' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'endPanel')
  i946.end = !!i947[2]
  request.r(i947[3], i947[4], 0, i946, 'hand')
  i946.enableSound = !!i947[5]
  request.r(i947[6], i947[7], 0, i946, 'startClickHandler')
  request.r(i947[8], i947[9], 0, i946, 'Tray')
  i946.level = i947[10]
  i946.trayPos = i947[11]
  i946.currentScore = i947[12]
  return i946
}

Deserializers["TaskManager"] = function (request, data, root) {
  var i948 = root || request.c( 'TaskManager' )
  var i949 = data
  return i948
}

Deserializers["BookInstantiate"] = function (request, data, root) {
  var i950 = root || request.c( 'BookInstantiate' )
  var i951 = data
  var i953 = i951[0]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.bookInstantiate = i952
  i950.offsetVector = new pc.Vec3( i951[1], i951[2], i951[3] )
  request.r(i951[4], i951[5], 0, i950, 'originalPos')
  return i950
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_FirstSelected')
  i956.m_sendNavigationEvents = !!i957[2]
  i956.m_DragThreshold = i957[3]
  return i956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i959 = data
  i958.m_HorizontalAxis = i959[0]
  i958.m_VerticalAxis = i959[1]
  i958.m_SubmitButton = i959[2]
  i958.m_CancelButton = i959[3]
  i958.m_InputActionsPerSecond = i959[4]
  i958.m_RepeatDelay = i959[5]
  i958.m_ForceModuleActive = !!i959[6]
  i958.m_SendPointerHoverToParent = !!i959[7]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i961 = data
  i960.ambientIntensity = i961[0]
  i960.reflectionIntensity = i961[1]
  i960.ambientMode = i961[2]
  i960.ambientLight = new pc.Color(i961[3], i961[4], i961[5], i961[6])
  i960.ambientSkyColor = new pc.Color(i961[7], i961[8], i961[9], i961[10])
  i960.ambientGroundColor = new pc.Color(i961[11], i961[12], i961[13], i961[14])
  i960.ambientEquatorColor = new pc.Color(i961[15], i961[16], i961[17], i961[18])
  i960.fogColor = new pc.Color(i961[19], i961[20], i961[21], i961[22])
  i960.fogEndDistance = i961[23]
  i960.fogStartDistance = i961[24]
  i960.fogDensity = i961[25]
  i960.fog = !!i961[26]
  request.r(i961[27], i961[28], 0, i960, 'skybox')
  i960.fogMode = i961[29]
  var i963 = i961[30]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i963[i + 0]) );
  }
  i960.lightmaps = i962
  i960.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i961[31], i960.lightProbes)
  i960.lightmapsMode = i961[32]
  i960.mixedBakeMode = i961[33]
  i960.environmentLightingMode = i961[34]
  i960.ambientProbe = new pc.SphericalHarmonicsL2(i961[35])
  i960.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i961[36])
  i960.useReferenceAmbientProbe = !!i961[37]
  request.r(i961[38], i961[39], 0, i960, 'customReflection')
  request.r(i961[40], i961[41], 0, i960, 'defaultReflection')
  i960.defaultReflectionMode = i961[42]
  i960.defaultReflectionResolution = i961[43]
  i960.sunLightObjectId = i961[44]
  i960.pixelLightCount = i961[45]
  i960.defaultReflectionHDR = !!i961[46]
  i960.hasLightDataAsset = !!i961[47]
  i960.hasManualGenerate = !!i961[48]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'lightmapColor')
  request.r(i967[2], i967[3], 0, i966, 'lightmapDirection')
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i968 = root || new UnityEngine.LightProbes()
  var i969 = data
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i977 = data
  var i979 = i977[0]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i979.length; i += 1) {
    i978.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i979[i + 0]));
  }
  i976.ShaderCompilationErrors = i978
  i976.name = i977[1]
  i976.guid = i977[2]
  var i981 = i977[3]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i976.shaderDefinedKeywords = i980
  var i983 = i977[4]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i983[i + 0]) );
  }
  i976.passes = i982
  var i985 = i977[5]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i985[i + 0]) );
  }
  i976.usePasses = i984
  var i987 = i977[6]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i987[i + 0]) );
  }
  i976.defaultParameterValues = i986
  request.r(i977[7], i977[8], 0, i976, 'unityFallbackShader')
  i976.readDepth = !!i977[9]
  i976.isCreatedByShaderGraph = !!i977[10]
  i976.compiled = !!i977[11]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i991 = data
  i990.shaderName = i991[0]
  i990.errorMessage = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i996 = root || new pc.UnityShaderPass()
  var i997 = data
  i996.id = i997[0]
  i996.subShaderIndex = i997[1]
  i996.name = i997[2]
  i996.passType = i997[3]
  i996.grabPassTextureName = i997[4]
  i996.usePass = !!i997[5]
  i996.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[6], i996.zTest)
  i996.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[7], i996.zWrite)
  i996.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[8], i996.culling)
  i996.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i997[9], i996.blending)
  i996.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i997[10], i996.alphaBlending)
  i996.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[11], i996.colorWriteMask)
  i996.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[12], i996.offsetUnits)
  i996.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[13], i996.offsetFactor)
  i996.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[14], i996.stencilRef)
  i996.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[15], i996.stencilReadMask)
  i996.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i997[16], i996.stencilWriteMask)
  i996.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i997[17], i996.stencilOp)
  i996.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i997[18], i996.stencilOpFront)
  i996.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i997[19], i996.stencilOpBack)
  var i999 = i997[20]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i999[i + 0]) );
  }
  i996.tags = i998
  var i1001 = i997[21]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( i1001[i + 0] );
  }
  i996.passDefinedKeywords = i1000
  var i1003 = i997[22]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1003[i + 0]) );
  }
  i996.passDefinedKeywordGroups = i1002
  var i1005 = i997[23]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1005[i + 0]) );
  }
  i996.variants = i1004
  var i1007 = i997[24]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1007[i + 0]) );
  }
  i996.excludedVariants = i1006
  i996.hasDepthReader = !!i997[25]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1009 = data
  i1008.val = i1009[0]
  i1008.name = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1011 = data
  i1010.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[0], i1010.src)
  i1010.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[1], i1010.dst)
  i1010.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1011[2], i1010.op)
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1013 = data
  i1012.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[0], i1012.pass)
  i1012.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[1], i1012.fail)
  i1012.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[2], i1012.zFail)
  i1012.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1013[3], i1012.comp)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.value = i1017[1]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.keywords = i1022
  i1020.hasDiscard = !!i1021[1]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1027 = data
  i1026.passId = i1027[0]
  i1026.subShaderIndex = i1027[1]
  var i1029 = i1027[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1026.keywords = i1028
  i1026.vertexProgram = i1027[3]
  i1026.fragmentProgram = i1027[4]
  i1026.exportedForWebGl2 = !!i1027[5]
  i1026.readDepth = !!i1027[6]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'shader')
  i1032.pass = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.type = i1037[1]
  i1036.value = new pc.Vec4( i1037[2], i1037[3], i1037[4], i1037[5] )
  i1036.textureValue = i1037[6]
  i1036.shaderPropertyFlag = i1037[7]
  return i1036
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1039 = data
  i1038.useSafeMode = !!i1039[0]
  i1038.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1039[1], i1038.safeModeOptions)
  i1038.timeScale = i1039[2]
  i1038.unscaledTimeScale = i1039[3]
  i1038.useSmoothDeltaTime = !!i1039[4]
  i1038.maxSmoothUnscaledTime = i1039[5]
  i1038.rewindCallbackMode = i1039[6]
  i1038.showUnityEditorReport = !!i1039[7]
  i1038.logBehaviour = i1039[8]
  i1038.drawGizmos = !!i1039[9]
  i1038.defaultRecyclable = !!i1039[10]
  i1038.defaultAutoPlay = i1039[11]
  i1038.defaultUpdateType = i1039[12]
  i1038.defaultTimeScaleIndependent = !!i1039[13]
  i1038.defaultEaseType = i1039[14]
  i1038.defaultEaseOvershootOrAmplitude = i1039[15]
  i1038.defaultEasePeriod = i1039[16]
  i1038.defaultAutoKill = !!i1039[17]
  i1038.defaultLoopType = i1039[18]
  i1038.debugMode = !!i1039[19]
  i1038.debugStoreTargetId = !!i1039[20]
  i1038.showPreviewPanel = !!i1039[21]
  i1038.storeSettingsLocation = i1039[22]
  i1038.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1039[23], i1038.modules)
  i1038.createASMDEF = !!i1039[24]
  i1038.showPlayingTweens = !!i1039[25]
  i1038.showPausedTweens = !!i1039[26]
  return i1038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1041 = data
  i1040.logBehaviour = i1041[0]
  i1040.nestedTweenFailureBehaviour = i1041[1]
  return i1040
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1042 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1043 = data
  i1042.showPanel = !!i1043[0]
  i1042.audioEnabled = !!i1043[1]
  i1042.physicsEnabled = !!i1043[2]
  i1042.physics2DEnabled = !!i1043[3]
  i1042.spriteEnabled = !!i1043[4]
  i1042.uiEnabled = !!i1043[5]
  i1042.textMeshProEnabled = !!i1043[6]
  i1042.tk2DEnabled = !!i1043[7]
  i1042.deAudioEnabled = !!i1043[8]
  i1042.deUnityExtendedEnabled = !!i1043[9]
  i1042.epoOutlineEnabled = !!i1043[10]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1047[i + 0]) );
  }
  i1044.files = i1046
  i1044.componentToPrefabIds = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1051 = data
  i1050.path = i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'unityObject')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1055[i + 0]) );
  }
  i1052.scriptsExecutionOrder = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1057[i + 0]) );
  }
  i1052.sortingLayers = i1056
  var i1059 = i1053[2]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1059[i + 0]) );
  }
  i1052.cullingLayers = i1058
  i1052.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1053[3], i1052.timeSettings)
  i1052.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1053[4], i1052.physicsSettings)
  i1052.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1053[5], i1052.physics2DSettings)
  i1052.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[6], i1052.qualitySettings)
  i1052.enableRealtimeShadows = !!i1053[7]
  i1052.enableAutoInstancing = !!i1053[8]
  i1052.enableDynamicBatching = !!i1053[9]
  i1052.lightmapEncodingQuality = i1053[10]
  i1052.desiredColorSpace = i1053[11]
  var i1061 = i1053[12]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1052.allTags = i1060
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.value = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1069 = data
  i1068.id = i1069[0]
  i1068.name = i1069[1]
  i1068.value = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1073 = data
  i1072.id = i1073[0]
  i1072.name = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1075 = data
  i1074.fixedDeltaTime = i1075[0]
  i1074.maximumDeltaTime = i1075[1]
  i1074.timeScale = i1075[2]
  i1074.maximumParticleTimestep = i1075[3]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1077 = data
  i1076.gravity = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.defaultSolverIterations = i1077[3]
  i1076.bounceThreshold = i1077[4]
  i1076.autoSyncTransforms = !!i1077[5]
  i1076.autoSimulation = !!i1077[6]
  var i1079 = i1077[7]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1079[i + 0]) );
  }
  i1076.collisionMatrix = i1078
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.layerId = i1083[1]
  i1082.otherLayerId = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'material')
  i1084.gravity = new pc.Vec2( i1085[2], i1085[3] )
  i1084.positionIterations = i1085[4]
  i1084.velocityIterations = i1085[5]
  i1084.velocityThreshold = i1085[6]
  i1084.maxLinearCorrection = i1085[7]
  i1084.maxAngularCorrection = i1085[8]
  i1084.maxTranslationSpeed = i1085[9]
  i1084.maxRotationSpeed = i1085[10]
  i1084.baumgarteScale = i1085[11]
  i1084.baumgarteTOIScale = i1085[12]
  i1084.timeToSleep = i1085[13]
  i1084.linearSleepTolerance = i1085[14]
  i1084.angularSleepTolerance = i1085[15]
  i1084.defaultContactOffset = i1085[16]
  i1084.autoSimulation = !!i1085[17]
  i1084.queriesHitTriggers = !!i1085[18]
  i1084.queriesStartInColliders = !!i1085[19]
  i1084.callbacksOnDisable = !!i1085[20]
  i1084.reuseCollisionCallbacks = !!i1085[21]
  i1084.autoSyncTransforms = !!i1085[22]
  var i1087 = i1085[23]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1087[i + 0]) );
  }
  i1084.collisionMatrix = i1086
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1091 = data
  i1090.enabled = !!i1091[0]
  i1090.layerId = i1091[1]
  i1090.otherLayerId = i1091[2]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1095[i + 0]) );
  }
  i1092.qualityLevels = i1094
  var i1097 = i1093[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1092.names = i1096
  i1092.shadows = i1093[2]
  i1092.anisotropicFiltering = i1093[3]
  i1092.antiAliasing = i1093[4]
  i1092.lodBias = i1093[5]
  i1092.shadowCascades = i1093[6]
  i1092.shadowDistance = i1093[7]
  i1092.shadowmaskMode = i1093[8]
  i1092.shadowProjection = i1093[9]
  i1092.shadowResolution = i1093[10]
  i1092.softParticles = !!i1093[11]
  i1092.softVegetation = !!i1093[12]
  i1092.activeColorSpace = i1093[13]
  i1092.desiredColorSpace = i1093[14]
  i1092.masterTextureLimit = i1093[15]
  i1092.maxQueuedFrames = i1093[16]
  i1092.particleRaycastBudget = i1093[17]
  i1092.pixelLightCount = i1093[18]
  i1092.realtimeReflectionProbes = !!i1093[19]
  i1092.shadowCascade2Split = i1093[20]
  i1092.shadowCascade4Split = new pc.Vec3( i1093[21], i1093[22], i1093[23] )
  i1092.streamingMipmapsActive = !!i1093[24]
  i1092.vSyncCount = i1093[25]
  i1092.asyncUploadBufferSize = i1093[26]
  i1092.asyncUploadTimeSlice = i1093[27]
  i1092.billboardsFaceCameraPosition = !!i1093[28]
  i1092.shadowNearPlaneOffset = i1093[29]
  i1092.streamingMipmapsMemoryBudget = i1093[30]
  i1092.maximumLODLevel = i1093[31]
  i1092.streamingMipmapsAddAllCameras = !!i1093[32]
  i1092.streamingMipmapsMaxLevelReduction = i1093[33]
  i1092.streamingMipmapsRenderersPerFrame = i1093[34]
  i1092.resolutionScalingFixedDPIFactor = i1093[35]
  i1092.streamingMipmapsMaxFileIORequests = i1093[36]
  i1092.currentQualityLevel = i1093[37]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1103 = data
  i1102.weight = i1103[0]
  i1102.vertices = i1103[1]
  i1102.normals = i1103[2]
  i1102.tangents = i1103[3]
  return i1102
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[33],"34":[11],"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[36],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[44],"52":[44],"53":[44],"54":[44],"55":[44],"56":[44],"57":[11],"58":[5],"59":[60],"61":[60],"62":[63],"64":[11],"65":[36],"66":[67],"68":[63],"69":[63],"70":[62],"71":[72,63],"73":[63],"74":[62],"75":[63],"76":[63],"77":[63],"78":[63],"79":[63],"80":[63],"81":[63],"82":[63],"83":[63],"84":[72,63],"85":[63],"86":[63],"87":[63],"88":[63],"89":[72,63],"90":[63],"91":[21],"92":[21],"22":[21],"93":[21],"94":[11],"14":[11],"95":[67],"96":[63],"97":[5,63],"98":[63,72],"99":[63],"100":[72,63],"101":[5],"102":[72,63],"103":[63],"104":[67]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animation","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Drag3DWithEvents","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","MoveTray","GameManager","UnityEngine.GameObject","TaskManager","BookInstantiate","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","CameraAspectFitter","Bullet","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.61f1";

Deserializers.productName = "SortDash_BookshelfPlayable";

Deserializers.lunaInitializationTime = "08/06/2025 06:18:47";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "30032";

Deserializers.projectId = "2989de0c27a2ffc41a9a9b35530e1f5f";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.SortDash-BookshelfPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "8bfa7672-ccc0-4058-ae42-58295b7d31d9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


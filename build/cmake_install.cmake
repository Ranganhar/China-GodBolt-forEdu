<<<<<<< HEAD
# Install script for directory: /mnt/e/China-GodBolt-forEdu
=======
# Install script for directory: /home/nanqin/JiShe
>>>>>>> 5dbf763df43bf33a3e740a6b76795f01f7599213

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

# Set default install directory permissions.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "/usr/bin/llvm-objdump")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for each subdirectory.
<<<<<<< HEAD
  include("/mnt/e/China-GodBolt-forEdu/build/yacc/cmake_install.cmake")
  include("/mnt/e/China-GodBolt-forEdu/build/ir/cmake_install.cmake")
  include("/mnt/e/China-GodBolt-forEdu/build/lib/cmake_install.cmake")
  include("/mnt/e/China-GodBolt-forEdu/build/backend/cmake_install.cmake")
=======
  include("/home/nanqin/JiShe/build/yacc/cmake_install.cmake")
  include("/home/nanqin/JiShe/build/ir/cmake_install.cmake")
  include("/home/nanqin/JiShe/build/lib/cmake_install.cmake")
  include("/home/nanqin/JiShe/build/backend/cmake_install.cmake")
>>>>>>> 5dbf763df43bf33a3e740a6b76795f01f7599213

endif()

if(CMAKE_INSTALL_COMPONENT)
  set(CMAKE_INSTALL_MANIFEST "install_manifest_${CMAKE_INSTALL_COMPONENT}.txt")
else()
  set(CMAKE_INSTALL_MANIFEST "install_manifest.txt")
endif()

string(REPLACE ";" "\n" CMAKE_INSTALL_MANIFEST_CONTENT
       "${CMAKE_INSTALL_MANIFEST_FILES}")
<<<<<<< HEAD
file(WRITE "/mnt/e/China-GodBolt-forEdu/build/${CMAKE_INSTALL_MANIFEST}"
=======
file(WRITE "/home/nanqin/JiShe/build/${CMAKE_INSTALL_MANIFEST}"
>>>>>>> 5dbf763df43bf33a3e740a6b76795f01f7599213
     "${CMAKE_INSTALL_MANIFEST_CONTENT}")

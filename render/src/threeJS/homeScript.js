import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
export let setup3D = function (mount) {
    // // Lights

    // const pointLight1 = new THREE.PointLight(0x073EF8, 10)
    // const pointLight1bis = new THREE.PointLight(0x073EF8, 1)
    // const pointLight2 = new THREE.PointLight(0x073EF8, 10)
    // const pointLight2bis = new THREE.PointLight(0x073EF8, 1)
    // pointLight1.position.set(0, 0, 0)
    // pointLight1bis.position.set(1.197, 2.123, 1.660)
    // pointLight2.position.set(-1.141, 2.123, 1.660)
    // pointLight2bis.position.set(-0.943, 2.123, 1.660)
    // scene.add(pointLight1)
    // scene.add(pointLight1bis)
    // scene.add(pointLight2)
    // scene.add(pointLight2bis)



    // // Loading
    // const textureLoader = new THREE.TextureLoader()
    // let normalMap = textureLoader.load("./NormalMap.png")

    // Materials

    // const material = new THREE.MeshStandardMaterial()
    // material.color = new THREE.Color(0xF73EF8)
    // material.roughness = 0.06
    // material.metalness = 0.54
    // material.normalMap = textureLoader.load("./NormalMap.png")


    // // Debug
    // const gui = new dat.GUI()

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    // Objects
    const geometry = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerWidth, 20, 20)

    // Materials

    const material = new THREE.MeshStandardMaterial()
    material.color = new THREE.Color(0x020004)
    material.roughness = 0.06
    material.metalness = 0.54
    // material.normalMap = normalMap

    // Mesh
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Lights

    const pointLight1 = new THREE.PointLight(0x073EF8, 5)
    const pointLight1bis = new THREE.PointLight(0x073EF8, 1)
    const pointLight2 = new THREE.PointLight(0x073EF8, 5)
    const pointLight2bis = new THREE.PointLight(0x073EF8, 1)
    pointLight1.position.set(1.395 - 0.25, 0, 1.660)
    pointLight1bis.position.set(1.197 - 0.25, 0, 1.660)
    pointLight2.position.set(-1.141 + 0.25, 0, 1.660)
    pointLight2bis.position.set(-0.943 + 0.25, 0, 1.660)
    scene.add(pointLight1)
    scene.add(pointLight1bis)
    scene.add(pointLight2)
    scene.add(pointLight2bis)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera)

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    mount.append(renderer.domElement);
    renderer.render(scene, camera)
    // tick()
}
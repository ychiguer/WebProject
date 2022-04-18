import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export let setup3D = function (mount) {
    // Loading
    const textureLoader = new THREE.TextureLoader()

    // Scene
    const scene = new THREE.Scene()

    // Objects
    const geometry = new THREE.PlaneGeometry(5, 5);

    // Materials

    const material = new THREE.MeshStandardMaterial()
    material.color = new THREE.Color(0x073EF8)
    material.roughness = 0.06
    material.metalness = 0.54
    material.normalMap = textureLoader.load("./NormalMap.png")

    // Mesh
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Lights

    const pointLight1 = new THREE.PointLight(0x073EF8, 10)
    const pointLight1bis = new THREE.PointLight(0x073EF8, 1)
    const pointLight2 = new THREE.PointLight(0x073EF8, 10)
    const pointLight2bis = new THREE.PointLight(0x073EF8, 1)
    pointLight1.position.set(1.367, 2.123, 1.660)
    pointLight1bis.position.set(1.197, 2.123, 1.660)
    pointLight2.position.set(-1.141, 2.123, 1.660)
    pointLight2bis.position.set(-0.943, 2.123, 1.660)
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
    camera.position.z = 0
    scene.add(camera)


    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */

    const clock = new THREE.Clock()

    const tick = () => {

        // const elapsedTime = clock.getElapsedTime()

        // // Update objects
        // sphere.rotation.y = .5 * elapsedTime

        // // Update Orbital Controls
        // // controls.update()

        // Render
        renderer.render(scene, camera)

        // // Call tick again on the next frame
        // window.requestAnimationFrame(tick)
    }

    tick();
    mount.append(renderer.domElement);
}
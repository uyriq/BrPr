import { Global } from '@mantine/core'
import boldBlender from './shared/fonts/BlenderPro-Bold.woff2'
import normalBlender from './shared/fonts/BlenderPro-Book.woff2'
import normalRoboto from './shared/fonts/robotomono-regular.ttf'
import boldRoboto from './shared/fonts/robotomono-bold.ttf'

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'BlenderProBook,sans-serif',
                        src: `url('${boldBlender}') format("woff")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'BlenderProBook,sans-serif',
                        src: `url('${normalBlender}') format("woff")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
                // https://fonts.google.com/share?selection.family=Roboto
                {
                    '@font-face': {
                        fontFamily: 'Roboto Mono rev=1, sans-serif, mono',
                        src: `url('${boldRoboto}') format("ttf")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Roboto Mono, sans-serif, mono',
                        src: `url('${normalRoboto}') format("ttf")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    )
}

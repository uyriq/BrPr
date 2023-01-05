import { useRef, useState } from 'react'
import {
    ActionIcon,
    Box,
    Group,
    SimpleGrid,
    Grid,
    Container,
    Tabs,
    Text,
    Title,
    UnstyledButton,
    useMantineTheme,
    Center,
} from '@mantine/core'
import { useMediaQuery, useIntersection, useScrollIntoView } from '@mantine/hooks'
import { Plus, Minus } from 'tabler-icons-react'
import { customColors } from 'constants-colors'

export default function Home() {
    const [activeTab, setActiveTab] = useState('matrix')
    const theme = useMantineTheme()
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl.toFixed()}px)`)
    const columnsL = largeScreen ? 4 : 6
    const columnsR = largeScreen ? 8 : 6
    const widthL = largeScreen ? '35vw' : '90vw'
    const widthR = largeScreen ? '55vw' : '90vw'
    const padding = largeScreen ? '80vw' : '10vw'
    const defaultStyle = {
        main: {
            background: customColors.backgroundMain,
            maxwidth: '100vw',
            justify: 'center',
            padding: '1% 1% 1% 1%',
            border: customColors.stackLineBorder1,
        },
        container: largeScreen
            ? {
                  minWidth: '100vw',
                  minHeight: '50vh',
              }
            : {
                  minWidth: '10vw',
                  minHeight: '10vh',
                  border: 'none',
              },
        matrixwrapp: {
            minHeight: '80vh',
            padding: '2% 2% 0 0',
            margin: '2% 2% 0% 0%',
        },

        sequenceswrapp: {
            minHeight: '80vh',
            padding: '2% 2% 0 0',
            margin: '2% 2% 0% 0%',
        },
    }

    const style = largeScreen
        ? {
              position: 'relative',
              top: '1vh',
          }
        : {
              position: 'unset',
              width: '100%',
          }

    const { scrollIntoView: scrollIntoViewUp, targetRef: matrixRef } = useScrollIntoView({
        offset: 200,
        alignment: 'start',
    })
    const { scrollIntoView: scrollIntoViewDown, targetRef: seqRef } = useScrollIntoView({
        offset: 100,
        alignment: 'start',
    })

    return (
        <>
            <Box style={style}>
                <div
                    flex={1}
                    sx={{
                        minHeight: '10vh',
                        minWidth: '50vw',
                        position: 'fixed',
                        padding: '0 0 0 0',
                        background: customColors.backroundPanelTabs,
                    }}
                >
                    {!largeScreen && (
                        <Tabs
                            value={activeTab}
                            onTabChange={setActiveTab}
                            sx={{
                                visibility: largeScreen ? 'hidden' : 'visible',
                                position: 'fixed',
                                top: '7vh',
                                background: customColors.backroundPanelTabs,
                                width: '100vw',
                                paddingRight: 0,
                                margin: '0 0 0vh 0vh',
                            }}
                        >
                            <Tabs.List>
                                <Tabs.Tab value="matrix" onClick={() => scrollIntoViewUp({ alignment: 'start' })}>
                                    matrix
                                </Tabs.Tab>
                                <Tabs.Tab value="sequences" onClick={() => scrollIntoViewDown({ alignment: 'start' })}>
                                    sequences
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="matrix">Matrix panel</Tabs.Panel>
                            <Tabs.Panel value="sequences">Sequences panel</Tabs.Panel>
                        </Tabs>
                    )}
                </div>
                <Container
                    style={{
                        ...defaultStyle.main,
                        ...defaultStyle.container,
                    }}
                >
                    <Text
                        span={true}
                        transform="uppercase"
                        size={56}
                        color={customColors.textColorHead}
                        sx={{
                            letterSpacing: '-4px',
                            fontStretch: 'condensed',
                        }}
                    >
                        Breach time Remaining
                    </Text>
                    <Grid>
                        <Grid.Col
                            xs={columnsL}
                            ref={matrixRef}
                            style={{ ...defaultStyle.main }}
                            sx={{
                                minHeight: '1vh',

                                maxWidth: widthL,

                                padding: '0% 0% 2% 0%',
                                margin: '10% 0% 0% 0%',
                            }}
                        >
                            <Box style={{ ...defaultStyle.matrixwrapp }}>
                                1
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                                <Plus />
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            xs={columnsR}
                            ref={seqRef}
                            style={{ ...defaultStyle.main }}
                            sx={{
                                minHeight: '1vh',
                                maxWidth: widthR,
                                padding: '0% 0% 2% 0%',
                                margin: '10% 0% 0% 0%',
                            }}
                        >
                            <Box style={{ ...defaultStyle.sequenceswrapp }}>
                                2
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                                <Minus />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

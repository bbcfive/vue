import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Years of Progress';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(79, 70, 229, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: 100,
                            fontWeight: 900,
                            background: 'linear-gradient(to bottom right, #fff, #aaa)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 20,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        Years of Progress
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            color: 'rgba(255, 255, 255, 0.6)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Capture the Moment
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}

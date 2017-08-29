import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs)

import { Button, Welcome } from '@storybook/react/demo';

import 'katex/dist/katex.min.css'
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'

const md = new MarkdownIt()
md.use(mk)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const result = md.render('# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$');

storiesOf('markdown-it', module)
  .add('katex', () =>
    <div dangerouslySetInnerHTML={{ __html: result }} />
  )

const markdown = '# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$'

stories.add('markdown-it-katex with knobs', () => {
  const parsedMarkdown = md.render(text('Markdown', markdown))
  return (
    <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
  )
})

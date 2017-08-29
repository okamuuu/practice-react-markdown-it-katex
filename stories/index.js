import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs)

import 'katex/dist/katex.min.css'
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'

const md = new MarkdownIt()
md.use(mk)

const markdown = '# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$'

stories.add('markdown-it-katex with knobs', () => {
  const parsedMarkdown = md.render(text('Markdown', markdown))
  return (
    <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
  )
})

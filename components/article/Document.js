import {
  StyledDocument,
  Markdown
} from '../styles/Document.styled';
import DocumentMeta from './DocumentMeta';
import {useEffect, useState} from 'react';
import DocumentActions from './DocumentActions';

const Document = ({title, markdown, meta}) => {
  const [longTitle, setLongTitle] = useState(false);

  useEffect(() => {
    if (title.length >= 70) {
      setLongTitle(true);
    } else {
      setLongTitle(false);
    }
  }, [title]);

  return (
    <StyledDocument longTitle={longTitle}>
      <h1>{title}</h1>
      <DocumentMeta meta={meta}/>
      <Markdown>
        <h2>Step two</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          iure reiciendis qui ab aut.
        </p>
        <h3>Step three</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          voluptate asperiores fugit <code>vero repudiandae</code> illum minima
          necessitatibus, maiores expedita facilis.{' '}
          <code>A sample of code</code>
        </p>
        <pre>
          <code>const name = &apos;JavaScript&apos;;</code>
        </pre>
        <h4>
          <a href='#'>Step four</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error
          facilis accusamus ut doloribus maiores!
        </p>
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
        <h5>Step five</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta ea
          nobis neque <i>architecto</i> in dolores veritatis{' '}
          <b>voluptates placeat</b> saepe, esse omnis, quia nulla, sed{' '}
          <strong>dignissimos magnam</strong> tempore explicabo voluptatem.{' '}
          <a href='https://twiiter.com'>Get this out</a>
        </p>
        <ol>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ol>
        <h6>Conclusion</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          ullam tenetur nihil id laudantium eos similique atque incidunt ad!{' '}
          <a href=''>
            Aperiam corporis minus nulla enim pariatur beatae alias, fugit
            possimus iste?
          </a>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          est?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          dolores veritatis molestiae.
        </p>
      </Markdown>
      <DocumentActions/>
    </StyledDocument>
  );
};

export default Document;

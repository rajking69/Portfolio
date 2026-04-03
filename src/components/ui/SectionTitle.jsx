import PropTypes from 'prop-types'

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
    </div>
  )
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default SectionTitle

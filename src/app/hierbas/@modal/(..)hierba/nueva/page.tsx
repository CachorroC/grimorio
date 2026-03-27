import EspecimenForm from '#@/lib/components/form/especimenForm';

export default function Page () {
  return (
    <div style={{
      gridColumn: 'span 8',
      gridRow   : 'span 10',
      overflow  : 'auto'
    }}
    >
      <EspecimenForm />
    </div>
  );
}